import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';
import { BookGuard } from './book.guard';


@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/findAll')
  @UseGuards(BookGuard)
  getAllBooks(): Book[] {
    return this.bookService.findAllBooks();
  }

  @Post('/add')
  addBook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }
}
