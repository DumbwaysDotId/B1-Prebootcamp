var year = 2020;

if((year % 400 == 0) || ((year % 100 !=0) && (year % 4 == 0))){
    document.write(year + " is a leap year.")
}
else{
    document.write(year + " is not a leap year.")
}