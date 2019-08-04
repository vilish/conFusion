import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/Dish';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSliderChange } from '@angular/material';

// const DISH = {
//   id: '0',
//   name: 'Uthappizza',
//   image: '/assets/images/uthappizza.png',
//   category: 'mains',
//   featured: true,
//   label: 'Hot',
//   price: '4.99',
//   // tslint:disable-next-line:max-line-length
//   description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
//   comments: [
//     {
//       rating: 5,
//       comment: 'Imagine all the eatables, living in conFusion!',
//       author: 'John Lemon',
//       date: '2012-10-16T17:57:28.556094Z'
//     },
//     {
//       rating: 4,
//       comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
//       author: 'Paul McVites',
//       date: '2014-09-05T17:57:28.556094Z'
//     },
//     {
//       rating: 3,
//       comment: 'Eat it, just eat it!',
//       author: 'Michael Jaikishan',
//       date: '2015-02-13T17:57:28.556094Z'
//     },
//     {
//       rating: 4,
//       comment: 'Ultimate, Reaching for the stars!',
//       author: 'Ringo Starry',
//       date: '2013-12-02T17:57:28.556094Z'
//     },
//     {
//       rating: 2,
//       comment: 'It\'s your birthday, we\'re gonna party!',
//       author: '25 Cent',
//       date: '2011-12-02T17:57:28.556094Z'
//     }
//   ]
// };

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  // @Input()
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;
  feedbackForm: FormGroup;
  comments: Comment;

  @ViewChild('commentForm', {static: true}) feedbackFormDirective;

  formErrors = {
    author: '',
    rating: '',
    comment: ''
  };

  validationMessages = {
    author: {
      required: 'Name is required.',
      minlength: 'Name must be at least 2 characters long.'
    },
    comment: {
      required: 'comment is required.'
    }
  };

  constructor(private dishservice: DishService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) {
    this.createForm();
  }


  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.subscribe((params: Params) => {
      this.dishservice.getDish(params.id).subscribe(dish => {
        this.dish = dish;
        this.setPrevNext(dish.id);
      });
    });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      author: ['', [
        Validators.required,
        Validators.minLength(2)]],
      rating: '',
      comment: ['', Validators.required]
    });

    this.feedbackForm.valueChanges.subscribe(
      data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onSubmit() {
    this.comments = this.feedbackForm.value;
    console.log(this.comments);
    this.feedbackForm.reset({
      author: '',
      rating: '',
      comment: ''
    });

    this.feedbackFormDirective.resetForm();

  }

  onInputChange(event: MatSliderChange) {
    console.log(event.value);
  }

  private onValueChanged(data?: any) {
    if (!this.feedbackForm) {
      return;
    }

    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }
}
