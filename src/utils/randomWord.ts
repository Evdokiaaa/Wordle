export default function randomWord(words: string[]) {
  return words[Math.floor(Math.random() * words.length) + 1];
}
