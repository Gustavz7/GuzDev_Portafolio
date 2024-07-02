export class UserData {
  person: Person = new Person();
  projects: Project[] = [];
  job_experience: Experience[] = [];
  badges: badge[] = [];
}

export class Person {
  first_name: string;
  last_name: string;
  description: string;
  linkedin_url: string;
  img_main_src: string;
  img_secondary_src: string;

  constructor() {
    (this.first_name = ''),
      (this.last_name = ''),
      (this.description = ''),
      (this.linkedin_url = ''),
      (this.img_main_src = ''),
      (this.img_secondary_src = '');
  }
}
export class Project {
  name: string;
  date: string;
  description: string;
  code_source: string;
  demo_source: string;
  img_url: string;
  tecnology: Tecnology;

  constructor() {
    (this.name = ''),
      (this.date = ''),
      (this.description = ''),
      (this.code_source = ''),
      (this.demo_source = ''),
      (this.img_url = ''),
      (this.tecnology = new Tecnology());
  }
}

class Tecnology {
  front_end: string;
  back_end: string;

  constructor() {
    (this.front_end = ''), (this.back_end = '');
  }
}

export class Experience {
  job_name: string;
  job_description: string;
  job_location: string;
  start_date: string;
  end_date: string;
  company_title: string;
  company_img: string;
  company_url: string;

  constructor() {
    this.job_name = '';
    this.job_description = '';
    this.job_location = '';
    this.start_date = '';
    this.end_date = '';
    this.company_title = '';
    this.company_img = '';
    this.company_url = '';
  }
}
export class badge {
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  title: string;
  img_url: string;
  validation_url: string;

  constructor() {
    this.name = '';
    this.description = '';
    this.start_date = '';
    this.end_date = '';
    this.title = '';
    this.img_url = '';
    this.validation_url = '';
  }
}
