import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { DeleteauthorComponent } from './deleteauthor/deleteauthor.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'',component:HomeComponent},{path:'books',component:BooksComponent},
{path:'signup',component:SignupComponent},{path:'login',component:LoginComponent},{path:'addbook',component:AddbookComponent},
{path:'addauthor',component:AddauthorComponent},{path:'authors',component:AuthorsComponent},
{path:'deletebook',component:DeletebookComponent},{path:'deleteauthor',component:DeleteauthorComponent},
{path:'book',component:BookComponent},{path:'author',component:AuthorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
