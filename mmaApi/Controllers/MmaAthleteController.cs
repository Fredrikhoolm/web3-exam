using Microsoft.AspNetCore.Mvc;
using MmaAthletesApi.Models;
using MmaAthletesApi.Services;
using System.Collections.Generic;

namespace MmaAthletesApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MmaAthleteController : ControllerBase
    {
        private readonly MmaAthleteService _mmaAthleteService;
        public MmaAthleteController(MmaAthleteService mmaAthleteService)
        {
            _mmaAthleteService = mmaAthleteService;
        }

        [HttpGet]
        public ActionResult<List<MmaAthlete>> Get() =>
        _mmaAthleteService.Get();

        [HttpGet("{id:length(24)}", Name = "GetMmaAthlete")]
        public ActionResult<MmaAthlete> Get(string id)
        {
            var mmaAthlete = _mmaAthleteService.Get(id);

            if (mmaAthlete == null)
            {
                return NotFound();
            }

            return mmaAthlete;
        }

        [HttpPost]
        public ActionResult<MmaAthlete> Create(MmaAthlete mmaAthlete)
        {
            _mmaAthleteService.Create(mmaAthlete);
            return CreatedAtRoute("GetMmaAthlete", new { id = mmaAthlete.Id.ToString(), mmaAthlete});
        }

        [HttpPut("{id:length(24)}")]
        public MmaAthlete Update(string id, MmaAthlete mmaAthleteIn)
        {
            _mmaAthleteService.Update(id, mmaAthleteIn);
            return mmaAthleteIn;
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var mmaAthlete = _mmaAthleteService.Get(id);

            if (mmaAthlete == null)
            {
                return NotFound();
            }

            _mmaAthleteService.Remove(mmaAthlete.Id);

            return NoContent();
        }
    }
}