package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
public class BookApiController {

    private List<Book> books;

    @GetMapping("/api/books")
    public List<Book> books() {
        return this.books;
    }

    @GetMapping("/api/book")
    public Book book(@RequestParam("isbn") Long isbn) {

        Optional<Book> book = this.books.stream()
                .filter(b -> b.getIsbn().equals(isbn))
                .findFirst();

        if (book.isPresent()) { // 本当はもう少しエレガントな書き方がある
            return book.get();
        } else {
            throw new NotFoundException();
        }
    }

    @PostConstruct
    public void init() {

        Book book1 = new Book();
        book1.setIsbn(9001L);
        book1.setTitle("book title 1");

        Book book2 = new Book();
        book2.setIsbn(9002L);
        book2.setTitle("book title 2");

        Book book3 = new Book();
        book3.setIsbn(9003L);
        book3.setTitle("book title 3");

        this.books = Arrays.asList(book1, book2, book3);
    }
}
