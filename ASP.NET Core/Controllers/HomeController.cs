using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASP.NET_Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP_NET_Core.Controllers;
public class HomeController: Controller {
    public IActionResult Index() {
        return View(new FormDataModel {
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
