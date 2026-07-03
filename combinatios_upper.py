from itertools import combinations 

def to_hop_viet_hoa_theo_so_luong(chuoi, so_ky_tu):
    n = len(chuoi)
    A=[]

    if so_ky_tu < 0 or so_ky_tu > n:
        print(f"số kí tự không hợp lệ")
    
    for i in combinations(range(n), so_ky_tu):
        kq = list(chuoi.lower())
        for j in i:
            kq[j] = kq[j].upper()
        A.append["".join(kq)]
    return A #toàn bộ tổ hợp xảy ra khi viết hoa 1,2,3,...,n kí tự.


listchuoi =["abcdef","qưertyu"] # chuỗi cần viết hoa
kqchuoi =[]
for chuoi in listchuoi:
    for i in range(len(chuoi)):
        kqchuoi += to_hop_viet_hoa_theo_so_luong(chuoi,i)
        print(chuoi,i)
print(kqchuoi)



