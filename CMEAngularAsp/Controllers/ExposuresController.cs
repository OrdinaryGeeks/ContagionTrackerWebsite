using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CMEAngularAsp.Models;

namespace CMEAngularAsp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExposuresController : ControllerBase
    {
        private readonly DBContext _context;

        public ExposuresController(DBContext context)
        {
            _context = context;
        }

        // GET: api/Exposures
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Exposure>>> GetExposure()
        {
            return await _context.Exposure.ToListAsync();
        }

        // GET: api/Exposures/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Exposure>> GetExposure(int id)
        {
            var exposure = await _context.Exposure.FindAsync(id);

            if (exposure == null)
            {
                return NotFound();
            }

            return exposure;
        }

        // PUT: api/Exposures/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExposure(int id, Exposure exposure)
        {
            if (id != exposure.ID)
            {
                return BadRequest();
            }

            _context.Entry(exposure).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExposureExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Exposures
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Exposure>> PostExposure(Exposure exposure)
        {
            _context.Exposure.Add(exposure);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExposure", new { id = exposure.ID }, exposure);
        }

        // DELETE: api/Exposures/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExposure(int id)
        {
            var exposure = await _context.Exposure.FindAsync(id);
            if (exposure == null)
            {
                return NotFound();
            }

            _context.Exposure.Remove(exposure);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExposureExists(int id)
        {
            return _context.Exposure.Any(e => e.ID == id);
        }
    }
}
