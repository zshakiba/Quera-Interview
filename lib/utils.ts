export default function convertToPersianNumbers(input: string): string {
    const persianNumbers: string[] = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  
    return input.replace(/\d/g, (match) => persianNumbers[parseInt(match, 10)]);
  }
  