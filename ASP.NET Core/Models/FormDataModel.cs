using System;

namespace ASP.NET_Core.Models;

public class FormDataModel {
    public int ID { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Phone { get; set; }
    public string Position { get; set; }
    public DateTime BirthDate { get; set; }
    public DateTime HireDate { get; set; }
    public string Notes { get; set; }
    public string Address { get; set; }
    public string Email { get; set; }
}
