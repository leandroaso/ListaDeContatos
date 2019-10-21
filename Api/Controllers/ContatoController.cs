using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Services;
using Entidades.model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContatoController : ControllerBase
    {
        private readonly IContatoService _service;
        public ContatoController(IContatoService service)
        {
            _service = service;
        }

        // GET: api/Contato
        [HttpGet]
        public IEnumerable<Contato> Get()
        {
            return _service.GetAll();
        }

        // GET: api/Contato/5
        [HttpGet("{id}", Name = "Get")]
        public Contato Get(int id)
        {
            return _service.Get(id);
        }

        // POST: api/Contato
        [HttpPost]
        public void Post([FromBody] Contato contato)
        {
            _service.Add(contato);
        }

        // PUT: api/Contato/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Contato contato)
        {
            _service.Update(id, contato);
        }

        // DELETE: api/contatos/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _service.Delete(id);
        }
    }
}
