import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  // page control
  page: number = 1;

  // list of years
  currentYear: number;
  years: number[] = [];

  // form group for personal info section
  personal = this.fb.group({
    firstname: ['', [Validators.pattern('^[a-z|A-Z]+$'), Validators.required]],
    lastname: [],
    email: [],
    // form group for phone number
    phnoGroup: this.fb.group({
      phcode: [],
      phno: [],
    }),
    portfolio: [],
    // form group for preferred roles
    roles: this.fb.group({
      instructionalDesigner: [false],
      softwareEngineer: [false],
      softwareQualityEngineer: [false],
    }),
    referral: [],
    sendUpdates: [false],
  });

  // form group for education
  education = this.fb.group({
    avgPercent: [],
    yearOfPassing: [],
    qualification: [],
    stream: [],
    college: [],
    newCollege: [],
    location: [],
  });

  // profession form group
  profession = this.fb.group({
    fresher: [],
    experience: this.fb.group({}),
    expertise: this.fb.group({
      javascript: [false],
      angular: [false],
      react: [false],
      node: [false],
      others: [false],
    }),
    otherExpertise: [],
    familiar: this.fb.group({
      javascript: [false],
      angular: [false],
      react: [false],
      node: [false],
      others: [false],
    }),
    otherFamiliar: [],
    onNotice: [],
    noticeDate: this.fb.group({}),
    recentlyApplied: [],
    recentlyAppliedRole: [],
  });

  // form structure
  registration = this.fb.group({
    personal: this.personal,
    education: this.education,
    profession: this.profession,
  });

  // add qualification,streams,college,location from database here

  previous() {
    if (this.page > 1 && this.page <= 3) {
      this.page -= 1;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }

  next() {
    if (this.page >= 1 && this.page < 3) {
      this.page += 1;
      if (this.page == 2) {
        console.log('clicked next');
      }
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }

  addExp() {
    console.log('added exp');
    this.registration.get('profession.fresher')?.setValue(true);
    if (this.registration.get('profession.fresher')?.value == true) {
      const exp = this.registration.get('profession.experience') as FormGroup;
      exp.addControl('yearsOfExp', this.fb.control(''));
      exp.addControl('currentCTC', this.fb.control(''));
      exp.addControl('expectedCTC', this.fb.control(''));
    }
  }

  removeExp() {
    console.log('remove exp');
    this.registration.get('profession.fresher')?.setValue(false);
    if (this.registration.get('profession.fresher')?.value == false) {
      const exp = this.registration.get('profession.experience') as FormGroup;
      exp.removeControl('yearsOfExp');
      exp.removeControl('currentCTC');
      exp.removeControl('expectedCTC');
    }
  }

  addNotice() {
    console.log('add notice');
    this.registration.get('profession.onNotice')?.setValue(true);
    if (this.registration.get('profession.onNotice')?.value == true) {
      const noticeDate = this.registration.get(
        'profession.noticeDate'
      ) as FormGroup;
      noticeDate.addControl('startDate', this.fb.control(''));
      noticeDate.addControl('endDate', this.fb.control(''));
    }
  }

  removeNotice() {
    console.log('remove notice');
    this.registration.get('profession.onNotice')?.setValue(false);
    if (this.registration.get('profession.onNotice')?.value == false) {
      const noticeDate = this.registration.get(
        'profession.noticeDate'
      ) as FormGroup;
      noticeDate.removeControl('startDate');
      noticeDate.removeControl('endDate');
    }
  }

  constructor(private fb: FormBuilder) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    for (let i: number = this.currentYear - 40; i <= this.currentYear; i++) {
      this.years.push(i);
    }
  }
}
