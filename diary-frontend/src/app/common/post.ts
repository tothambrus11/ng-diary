export class Post {

  id: number;
  title: string;
  content: string;
  date: Date;
  authorId: number;

  constructor() {
    this.title = '';
    this.date = new Date(Date.now());
    this.content = '';
    this.authorId = 0;
  }

  static decode(postJson: any): Post {
    const post = Object.create(Post.prototype);
    return Object.assign(post, postJson, {
      date: new Date(postJson.date)
    });
  }

  encode(): any {
    return Object.assign({}, this, {
      date: this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate()
    });
  }
}
