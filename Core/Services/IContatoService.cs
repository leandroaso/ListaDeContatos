using Entidades.model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Services
{
    public interface IContatoService
    {
        void Add(Contato contato);
        IEnumerable<Contato> GetAll();
        Contato Get(int id);
        void Update(int id, Contato contato);
        void Delete(int id);
    }
}
