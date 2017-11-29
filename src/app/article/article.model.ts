export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number){
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): boolean {
    this.votes++;
    return false;
  }

  voteDown(): boolean {
    this.votes--;
    return false;
  }

  domain(): string {
    try {
      // eg http://foo.com/path/to/bar
      const  domainAndPath: string = this.link.split('//')[1];
      // eg foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }

}
