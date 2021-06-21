using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ComeiaAspNetCore.Models
{
    public class Empresa
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "O campo  Nome Fantasia é um campo obrigatorio.")]
        [Display(Name = "Nome Fantasia")]
        public string nome_fantasia { get; set; }
        [Required(ErrorMessage = "O campo  CNPJ é um campo obrigatorio.")]
        [Display(Name = "CNPJ")]
        public string cnpj { get; set; }
        [Required(ErrorMessage = "O campo Email Fantasia é um campo obrigatorio.")]
        [EmailAddress]
        [Display(Name = "Email")]
        public string email { get; set; }
        [Required(ErrorMessage = "O Nome Fantasia é um campo obrigatorio.")]
        [Phone]
        [Display(Name = "Telefone")]
        public string telefone { get; set; }
        [Display(Name = "Data do Cadastro")]
        public Nullable<System.DateTime> created_at { get; set; }

    }
}
