using Microsoft.AspNetCore.Mvc;
using MmaArenaApi.Models;
using MmaArenasApi.Services;
using System.Collections.Generic;

namespace MmaArenasApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MmaArenaController : ControllerBase
    {
        private readonly MmaArenaService _mmaArenaService;
        public MmaArenaController(MmaArenaService mmaArenaService)
        {
            _mmaArenaService = mmaArenaService;
        }

        [HttpGet]
        public ActionResult<List<MmaArena>> Get() =>
        _mmaArenaService.Get();

        [HttpGet("{id:length(24)}", Name = "GetMmaArena")]
        public ActionResult<MmaArena> Get(string id)
        {
            var mmaArena = _mmaArenaService.Get(id);

            if (mmaArena == null)
            {
                return NotFound();
            }

            return mmaArena;
        }

        [HttpPost]
        public ActionResult<MmaArena> Create(MmaArena mmaArena)
        {
            _mmaArenaService.Create(mmaArena);
            return CreatedAtRoute("GetMmaArena", new { id = mmaArena.Id.ToString(), mmaArena});
        }

        [HttpPut("{id:length(24)}")]
        public MmaArena Update(string id, MmaArena mmaArenaIn)
        {
            _mmaArenaService.Update(id, mmaArenaIn);
            return mmaArenaIn;
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var mmaArena = _mmaArenaService.Get(id);

            if (mmaArena == null)
            {
                return NotFound();
            }

            _mmaArenaService.Remove(mmaArena.Id);

            return NoContent();
        }
    }
}