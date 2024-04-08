import {
    IsAlphanumeric,
    IsDate,
    IsEmail,
    IsIn,
    IsNotEmpty,
    IsPhoneNumber,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';


const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5, { message: "อย่างน้อยต้องมี  5 ตัวอักษร" })
    firstname: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5, { message: "อย่างน้อยต้องมี 5 ตัวอักษร" })
    lastname: string;

    @IsEmail({}, { message: "รูปแบบอีเมลไม่ถูกต้อง" })
    @IsNotEmpty()
    email: string;

    @IsPhoneNumber("TH", { message: "รูปแบบหมายเลขโทรศัพท์ไม่ถูกต้อง" })
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsAlphanumeric()
    @MinLength(5, { message: "อย่างน้อยต้องมี 5 ตัวอักษร" })
    @IsNotEmpty()
    username: string;

    
    @MinLength(8, { message: "อย่างน้อยต้องมี 8 ตัวอักษร" })
    @IsNotEmpty()
    @Matches(passwordRegEx, { message: "รหัสผ่านต้องมีอักขระอย่างน้อย 8 และสูงสุด 20 ตัว" })
    password: string;

    @IsIn(["user", "admin"])
    @IsNotEmpty()
    role: string;

    @IsDate()
    @IsNotEmpty()
    timecreated: Date;

}
