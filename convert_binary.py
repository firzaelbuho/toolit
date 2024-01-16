def to_binary(number):
    integer_part = int(number)
    fractional_part = number - integer_part

    # Konversi bagian integer ke biner
    binary_integer = bin(integer_part)[2:]

    # Konversi bagian pecahan ke biner
    binary_fractional = ""
    max_fractional_length = 8
    while fractional_part > 0 and len(binary_fractional) < max_fractional_length:
        fractional_part *= 2
        bit = int(fractional_part)
        binary_fractional += str(bit)
        fractional_part -= bit

    return binary_integer + ("." + binary_fractional if binary_fractional else "")


def to_octal(number):
    integer_part = int(number)
    fractional_part = number - integer_part

    # Konversi bagian integer ke oktal
    octal_integer = oct(integer_part)[2:]

    # Konversi bagian pecahan ke oktal
    octal_fractional = ""
    max_fractional_length = 8
    while fractional_part > 0 and len(octal_fractional) < max_fractional_length:
        fractional_part *= 8
        digit = int(fractional_part)
        octal_fractional += str(digit)
        fractional_part -= digit

    return octal_integer + ("." + octal_fractional if octal_fractional else "")


def to_hexadecimal(number):
    integer_part = int(number)
    fractional_part = number - integer_part

    # Konversi bagian integer ke heksadesimal
    hex_integer = hex(integer_part)[2:]

    # Konversi bagian pecahan ke heksadesimal
    hex_fractional = ""
    max_fractional_length = 8
    while fractional_part > 0 and len(hex_fractional) < max_fractional_length:
        fractional_part *= 16
        digit = int(fractional_part)
        if digit < 10:
            hex_fractional += str(digit)
        else:
            hex_fractional += chr(ord('A') + digit - 10)
        fractional_part -= digit

    return hex_integer + ("." + hex_fractional if hex_fractional else "")


def main():
    input_number = float(input("Masukkan bilangan: "))
    choice = int(input("Pilih konversi yang diinginkan:\n1. Biner\n2. Heksadesimal\n3. Oktaf\nPilihan Anda: "))

    if choice == 1:
        print("Hasil konversi ke biner:", to_binary(input_number))
    elif choice == 2:
        print("Hasil konversi ke heksadesimal:", to_hexadecimal(input_number))
    elif choice == 3:
        print("Hasil konversi ke oktal:", to_octal(input_number))
    else:
        print("Pilihan tidak valid.")


if __name__ == "__main__":
    main()
