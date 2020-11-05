# перезаписывание
# for files in range(120):
#     dlc_len = 3 - len(str(files + 1))
#     dlc = ""
#     for i in range(dlc_len):
#         dlc += "0"

#     print("E:/scan-ы/галочкаsvg's/галочка0" + dlc + str(files + 1) + ".svg")
#     fail = open("E:/scan-ы/галочкаsvg's/галочка0" + dlc + str(files + 1) + ".svg", "r")
#     newFile = open("E:/scan-ы/new_svg's/галочка0" + dlc + str(files + 1) + ".svg", "w")

#     for i in fail.read():
#         newFile.write(i.replace("\"", "\'"))

#     fail.close()
#     newFile.close()



# записывание в один файл 
# newFile = open("E:/scan-ы/галочкаsvgs.svg", "a")

# for files in range(120):
#     dlc_len = 3 - len(str(files + 1))
#     dlc = ""
#     for i in range(dlc_len):
#         dlc += "0"

#     print("E:/scan-ы/new_svg's/галочка0" + dlc + str(files + 1) + ".svg")
#     fail = open("E:/scan-ы/new_svg's/галочка0" + dlc + str(files + 1) + ".svg", "r")

#     for i in fail.read():
#         if i != "":
#             newFile.write(i)

#     fail.close()
#     newFile.write("\",\"")

# newFile.close()


#переписывание файла
# once = open("E:/scan-ы/галочкаsvgs.svg", "r")
# data = once.read()

# once.close()
# once = open("E:/scan-ы/галочкаsvgs.svg", "w")

# once.write(data.replace("\n", ""))

# once.close