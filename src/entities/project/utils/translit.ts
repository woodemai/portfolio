export function translit(word: string) {
  type RussianLetters =
    | "а"
    | "б"
    | "в"
    | "г"
    | "д"
    | "е"
    | "ё"
    | "ж"
    | "з"
    | "и"
    | "й"
    | "к"
    | "л"
    | "м"
    | "н"
    | "о"
    | "п"
    | "р"
    | "с"
    | "т"
    | "у"
    | "ф"
    | "х"
    | "ц"
    | "ч"
    | "ш"
    | "щ"
    | "ъ"
    | "ы"
    | "ь"
    | "э"
    | "ю"
    | "я";

  const converter: Record<RussianLetters, string> = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  word = word.toLowerCase();

  let answer = "";
  for (const letter of word) {
    const key = (Object.keys(converter) as Array<RussianLetters>).find(
      (key) => key === letter
    );
    if (key) {
      const value = converter[key];
      if (value === undefined) {
        answer += letter;
      } else {
        answer += value;
      }
    } else {
      answer += letter;
    }
  }

  answer = answer.replace(/[^-0-9a-z]/g, "-");
  answer = answer.replace(/-+/g, "-");
  answer = answer.replace(/^\\-$/g, "");
  return answer;
}
