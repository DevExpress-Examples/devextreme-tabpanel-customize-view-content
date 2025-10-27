import { Injectable } from '@angular/core';

export class Customer {
  ID: number;
  CompanyName: string;
  Address: string;
  City: string;
  State: string;
  Zipcode: number;
  Phone: string;
  Fax: string;
  Website: string;
}

export class Population {
  arg: number;
  val: number;
}

export class Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Position: string;
  BirthDate: string;
  HireDate: string;
  Notes: string;
  Address: string;
  Phone: string;
  Email: string;
}

export class Appointment {
  text: string;
  startDate: Date;
  endDate: Date;
  allDay?: boolean;
}

let customers: Customer[] = [{
  "ID": 1,
  "CompanyName": "Super Mart of the West",
  "Address": "702 SW 8th Street",
  "City": "Bentonville",
  "State": "Arkansas",
  "Zipcode": 72716,
  "Phone": "(800) 555-2797",
  "Fax": "(800) 555-2171",
  "Website": "http://www.nowebsitesupermart.com"
}, {
  "ID": 2,
  "CompanyName": "Electronics Depot",
  "Address": "2455 Paces Ferry Road NW",
  "City": "Atlanta",
  "State": "Georgia",
  "Zipcode": 30339,
  "Phone": "(800) 595-3232",
  "Fax": "(800) 595-3231",
  "Website": "http://www.nowebsitedepot.com"
}, {
  "ID": 3,
  "CompanyName": "K&S Music",
  "Address": "1000 Nicllet Mall",
  "City": "Minneapolis",
  "State": "Minnesota",
  "Zipcode": 55403,
  "Phone": "(612) 304-6073",
  "Fax": "(612) 304-6074",
  "Website": "http://www.nowebsitemusic.com"
}, {
  "ID": 4,
  "CompanyName": "Tom's Club",
  "Address": "999 Lake Drive",
  "City": "Issaquah",
  "State": "Washington",
  "Zipcode": 98027,
  "Phone": "(800) 955-2292",
  "Fax": "(800) 955-2293",
  "Website": "http://www.nowebsitetomsclub.com"
}, {
  "ID": 5,
  "CompanyName": "E-Mart",
  "Address": "3333 Beverly Rd",
  "City": "Hoffman Estates",
  "State": "Illinois",
  "Zipcode": 60179,
  "Phone": "(847) 286-2500",
  "Fax": "(847) 286-2501",
  "Website": "http://www.nowebsiteemart.com"
}, {
  "ID": 6,
  "CompanyName": "Walters",
  "Address": "200 Wilmot Rd",
  "City": "Deerfield",
  "State": "Illinois",
  "Zipcode": 60015,
  "Phone": "(847) 940-2500",
  "Fax": "(847) 940-2501",
  "Website": "http://www.nowebsitewalters.com"
}, {
  "ID": 7,
  "CompanyName": "StereoShack",
  "Address": "400 Commerce S",
  "City": "Fort Worth",
  "State": "Texas",
  "Zipcode": 76102,
  "Phone": "(817) 820-0741",
  "Fax": "(817) 820-0742",
  "Website": "http://www.nowebsiteshack.com"
}, {
  "ID": 8,
  "CompanyName": "Circuit Town",
  "Address": "2200 Kensington Court",
  "City": "Oak Brook",
  "State": "Illinois",
  "Zipcode": 60523,
  "Phone": "(800) 955-2929",
  "Fax": "(800) 955-9392",
  "Website": "http://www.nowebsitecircuittown.com"
}, {
  "ID": 9,
  "CompanyName": "Premier Buy",
  "Address": "7601 Penn Avenue South",
  "City": "Richfield",
  "State": "Minnesota",
  "Zipcode": 55423,
  "Phone": "(612) 291-1000",
  "Fax": "(612) 291-2001",
  "Website": "http://www.nowebsitepremierbuy.com"
}, {
  "ID": 10,
  "CompanyName": "ElectrixMax",
  "Address": "263 Shuman Blvd",
  "City": "Naperville",
  "State": "Illinois",
  "Zipcode": 60563,
  "Phone": "(630) 438-7800",
  "Fax": "(630) 438-7801",
  "Website": "http://www.nowebsiteelectrixmax.com"
}, {
  "ID": 11,
  "CompanyName": "Video Emporium",
  "Address": "1201 Elm Street",
  "City": "Dallas",
  "State": "Texas",
  "Zipcode": 75270,
  "Phone": "(214) 854-3000",
  "Fax": "(214) 854-3001",
  "Website": "http://www.nowebsitevideoemporium.com"
}, {
  "ID": 12,
  "CompanyName": "Screen Shop",
  "Address": "1000 Lowes Blvd",
  "City": "Mooresville",
  "State": "North Carolina",
  "Zipcode": 28117,
  "Phone": "(800) 445-6937",
  "Fax": "(800) 445-6938",
  "Website": "http://www.nowebsitescreenshop.com"
}];

let populationData: Population[] = [{
  arg: 1950,
  val: 2525778669
}, {
  arg: 1960,
  val: 3026002942
}, {
  arg: 1970,
  val: 3691172616
}, {
  arg: 1980,
  val: 4449048798
}, {
  arg: 1990,
  val: 5320816667
}, {
  arg: 2000,
  val: 6127700428
}, {
  arg: 2010,
  val: 6916183482
}];

let employee : Employee = {
  ID: 1,
  FirstName: "John",
  LastName: "Heart",
  Position: "CEO",
  BirthDate: "1964/03/16",
  HireDate: "1995/01/15",
  Notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
  Address: "351 S Hill St., Los Angeles, CA",
  Phone: "360-684-1334",
  Email: "jheart@dx-email.com"
};

let positions : string[] = [
  "HR Manager",
  "IT Manager",
  "CEO",
  "Controller",
  "Sales Manager",
  "Support Manager",
  "Shipping Manager"
];

let appointments: Appointment[] = [
  {
      text: "Website Re-Design Plan",
      startDate: new Date(2017, 4, 22, 9, 30),
      endDate: new Date(2017, 4, 22, 11, 30)
  }, {
      text: "Book Flights to San Fran for Sales Trip",
      startDate: new Date(2017, 4, 22, 12, 0),
      endDate: new Date(2017, 4, 22, 13, 0),
      allDay: true
  }, {
      text: "Install New Router in Dev Room",
      startDate: new Date(2017, 4, 22, 14, 30),
      endDate: new Date(2017, 4, 22, 15, 30)
  }, {
      text: "Approve Personal Computer Upgrade Plan",
      startDate: new Date(2017, 4, 23, 10, 0),
      endDate: new Date(2017, 4, 23, 11, 0)
  }, {
      text: "Final Budget Review",
      startDate: new Date(2017, 4, 23, 12, 0),
      endDate: new Date(2017, 4, 23, 13, 35)
  }, {
      text: "New Brochures",
      startDate: new Date(2017, 4, 23, 14, 30),
      endDate: new Date(2017, 4, 23, 15, 45)
  }, {
      text: "Install New Database",
      startDate: new Date(2017, 4, 24, 9, 45),
      endDate: new Date(2017, 4, 24, 11, 15)
  }, {
      text: "Approve New Online Marketing Strategy",
      startDate: new Date(2017, 4, 24, 12, 0),
      endDate: new Date(2017, 4, 24, 14, 0)
  }, {
      text: "Upgrade Personal Computers",
      startDate: new Date(2017, 4, 24, 15, 15),
      endDate: new Date(2017, 4, 24, 16, 30)
  }, {
      text: "Customer Workshop",
      startDate: new Date(2017, 4, 25, 11, 0),
      endDate: new Date(2017, 4, 25, 12, 0),
      allDay: true
  }, {
      text: "Prepare 2015 Marketing Plan",
      startDate: new Date(2017, 4, 25, 11, 0),
      endDate: new Date(2017, 4, 25, 13, 30)
  }, {
      text: "Brochure Design Review",
      startDate: new Date(2017, 4, 25, 14, 0),
      endDate: new Date(2017, 4, 25, 15, 30)
  }, {
      text: "Create Icons for Website",
      startDate: new Date(2017, 4, 26, 10, 0),
      endDate: new Date(2017, 4, 26, 11, 30)
  }, {
      text: "Upgrade Server Hardware",
      startDate: new Date(2017, 4, 26, 14, 30),
      endDate: new Date(2017, 4, 26, 16, 0)
  }, {
      text: "Submit New Website Design",
      startDate: new Date(2017, 4, 26, 16, 30),
      endDate: new Date(2017, 4, 26, 18, 0)
  }, {
      text: "Launch New Website",
      startDate: new Date(2017, 4, 26, 12, 20),
      endDate: new Date(2017, 4, 26, 14, 0)
  }
];

@Injectable({
  providedIn: 'root'
})
export class Service {
  getCustomers(): Customer[] {
    return customers;
  }

  getPopulationData(): Population[] {
      return populationData;
  }

  getEmployee() : Employee {
      return employee;
  }

  getPositions() : string[] {
      return positions
  }

  getAppointments(): Appointment[] {
      return appointments;
  }
}
