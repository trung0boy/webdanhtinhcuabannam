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
            h = "".join(kq)
            A.append(h)
    return A

def slove(listchuoi):
    A= []
    for chuoi in listchuoi:
        n = len(chuoi)
        for i in range(1,n+1):
            A.append(to_hop_viet_hoa_theo_so_luong(chuoi, i))
    return A

A=["nguyen thanh trung"]
kq = slove(A)

for i in kq:
    print(i)

"""
Chương trình tạo tất cả các tổ hợp viết hoa các ký tự trong chuỗi theo số lượng ký tự được chọn.
"""

