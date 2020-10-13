using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TabPanel___Custom_editors_and_content_in_tabs.Models;

namespace TabPanel___Custom_editors_and_content_in_tabs.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View(new FormViewModel {
                ID = 1,
                FirstName = "John",
                LastName = "Heart",
                Phone = "360-684-1334",
                Position = "CEO",
                BirthDate = DateTime.Parse("1964/03/16"),
                HireDate = DateTime.Parse("1995/01/15"),
                Notes = "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
                Address = "351 S Hill St., Los Angeles, CA",
                Email = "jheart@dx-email.com"
            });
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() {
            return View();
        }
    }
}
