import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  addBookService(book: Book): string {
    // id auto generate whit the help uuid package;
    book.id = uuidv4();

    this.books.push(book);
    return 'book has been sucessfully add';
  }

  findAllBooks(): Book[] {
    return this.books;
  }
}
