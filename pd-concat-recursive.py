import pandas as pd
import re
import pymongo
import json
from pymongo import MongoClient
from os import walk, path

source_folder = r"Y:\Unresourced reports"
source_folder_list = []
OuterdroppedSheets = []
OutersuccessfulSheets = []


def sources():
    for root, dirs, files in walk(source_folder):
        if path.abspath(root) not in source_folder_list:
            source_folder_list.append(path.abspath(root))


def main(dirselect):
    droppedSheets = []
    successfulSheets = []
    for root, dirs, files in walk(dirselect):
        files.sort(reverse=True)
        for name in files:
            (base, ext) = path.splitext(name)  # split base and extension
            if ext in (".xls"):  # check the extension
                full_name = path.join(root, name)  # create full path
                try:
                    # print(root, name, full_name)
                    df1 = pd.read_excel(full_name)
                    df1.columns = df1.columns.str.replace(".", "")
                    df1.columns = df1.columns.str.replace("/", "")
                    df1.columns = df1.columns.str.replace(" ", "")
                    df1.columns = df1.columns.str.replace(":", "")
                    df1.columns = df1.columns.str.replace("#", "")
                    try:
                        df1.columns = [
                            "RegNum" if x == "RegNo" else "RegNum" if x == "Reg" else x
                            for x in df1.columns
                        ]
                        df1["RegNum"].str.strip()
                        df1.drop_duplicates(
                            subset=["RegNum"], keep="first", inplace=True
                        )
                    except Exception:
                        # print(full_name,e)
                        droppedSheets.append(full_name)
                        continue
                    try:
                        df1["Date"] = re.search(
                            r"(\d{1,2}([.\-\/])\d{1,2}([.\-\/])\d{1,4})", name
                        ).group()  # |(\d\w+\s\w+)
                        df1["Date"] = df1["Date"].astype("datetime64[ns]")
                    except Exception:
                        droppedSheets.append(full_name)
                        continue

                    try:
                        df1["Email"] = df1["Telephone"].str.extract(
                            "([a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+)", expand=True
                        )
                    except Exception:
                        # print(e)
                        pass
                    successfulSheets.append(full_name)
                    write_df_to_mongoDB(df1)
                    # finalDF = finalDF.append(df1)
                    # print(finalDF.shape[0])
                except Exception:
                    # print(full_name,e)
                    droppedSheets.append(full_name)
                    continue
            else:
                # if not excel file.. continue
                continue

    for i in droppedSheets:
        OuterdroppedSheets.append(i)
        # print(i)
    for i in successfulSheets:
        OutersuccessfulSheets.append(i)
        # print(i)


def write_df_to_mongoDB(
    my_df,
    database_name="master",
    collection_name="unresourced",
    server="localhost",
    mongodb_port=27017,
    chunk_size=100,
):

    client = MongoClient(server, int(mongodb_port))
    db = client[database_name]
    collection = db[collection_name]

    collection.create_index(
        [("RegNum", pymongo.ASCENDING), ("Date", pymongo.ASCENDING)], unique=True
    )

    # collection.delete_many({})
    my_list = []

    try:
        my_df.drop_duplicates(subset=["RegNum"], keep="first", inplace=True)
        my_list = my_df.to_dict("records")
        # my_list = my_df.dtypes.apply(lambda x: x.name).to_dict('records')
        # l = len(my_list)
        collection.insert_many(
            my_list, ordered=False
        )  # False skips only failed inserts
    except Exception:
        # print('insert many error: ',e)
        pass
    finally:
        client.close()

    # print(f'{l} records written to DB')
    return


if __name__ == "__main__":
    sources()
    # finalDF = pd.DataFrame()
    print("Begin...")
    for i in source_folder_list:
        main(i)
        # main(i,finalDF)

    # print('Save CSV...')
    # finalDF.to_csv('allunres3.csv')
    # finalDF.reset_index(level=0, inplace=True)

    # print('Save json...')
    # xx = finalDF.to_json(orient='records')
    # with open('xx.json', 'w') as f:
    #     f.write(xx)

    print("Writing Results...")
    with open("droppedsheets.json", "w") as outfile:
        json.dump(OuterdroppedSheets, outfile)
    with open("successfulsheets.json", "w") as outfile:
        json.dump(OutersuccessfulSheets, outfile)
