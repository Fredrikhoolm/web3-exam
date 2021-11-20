using Microsoft.AspNetCore.Mvc;
using MmaAthletesApi.Models;
using MmaAthletesApi.Services;
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
    }
}