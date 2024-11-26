export class TypedTitles {
  currentTitle: string[] = [];
  titleIndex: number = 0;
  currentLetterIndex: number = 0;
  interval: ReturnType<typeof setInterval> | null = null;
  isRunning: boolean = false;

  constructor(private titles: string[]) {}

  nextTitle() {
    this.titleIndex = (this.titleIndex + 1) % this.titles.length;
    this.currentLetterIndex = 0;
    this.currentTitle = [];
  }

  nextLetter() {
    const title = this.titles[this.titleIndex];
    if (this.currentLetterIndex < title.length) {
      this.currentTitle.push(title[this.currentLetterIndex]);
      this.currentLetterIndex++;
    }
  }

  getCurrentTitle() {
    return this.currentTitle.join('');
  }

  start(onTitleChange: (title: string) => void) {
    if (typeof this.interval === 'number') clearInterval(this.interval);
    this.isRunning = true;

    this.interval = setInterval(() => {
      this.titleLettersHandler(onTitleChange);
    }, 150);
  }

  stop() {
    if (typeof this.interval === 'number') clearInterval(this.interval);
    this.isRunning = false;
  }

  private titleLettersHandler(onTitleChange: (title: string) => void) {
    const title = this.titles[this.titleIndex];

    if (this.currentLetterIndex < title.length) {
      this.nextLetter();
    } else {
      this.nextTitle();
    }

    onTitleChange(this.getCurrentTitle());
  }
}
