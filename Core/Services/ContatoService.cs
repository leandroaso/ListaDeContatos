using Entidades.model;
using EntityFrameworkCore.Repository;
using System.Collections.Generic;
using System.Linq;

namespace Core.Services
{
    public class ContatoService : IContatoService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IRepository<Contato> _repository;

        public ContatoService(IUnitOfWork unit, IRepository<Contato> repo)
        {
            _unitOfWork = unit;
            _repository = repo;
        }

        public void Add(Contato contato)
        {
            _repository.Add(contato);
            _unitOfWork.Commit();
        }

        public IEnumerable<Contato> GetAll()
        {
            return _repository.Get();
        }

        public Contato Get(int id)
        {
            return _repository.Get(c => c.Id == id).SingleOrDefault();
        }

        public void Update(int id, Contato contato)
        {
            _repository.Update(contato);
            _unitOfWork.Commit();
        }

        public void Delete(int id)
        {
            _repository.Delete(this.Get(id));
            _unitOfWork.Commit();
        }
    }
}
