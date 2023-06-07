#BubbleSort
def bubble_sort(array):
    for i in range(len(array) - 1):
        for j in range(len(array) - 1):
            if(array[j] > array[j + 1]):
                array[j], array[j+1] = array[j+1],array[j]
    

data = [6,5,3,1,2,7,4,8]
bubble_sort(data)
print(data)