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
    public class UserCMEsController : ControllerBase
    {
        private readonly DBContext _context;

        public UserCMEsController(DBContext context)
        {
            _context = context;
        }

        // GET: api/UserCMEs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserCME>>> GetUser()
        {
            return await _context.UserCME.ToListAsync();
        }

        // GET: api/UserCMEs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserCME>> GetUserCME(int id)
        {
            var userCME = await _context.UserCME.FindAsync(id);

            if (userCME == null)
            {
                return NotFound();
            }

            return userCME;
        }

        // PUT: api/UserCMEs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserCME(int id, UserCME userCME)
        {
            if (id != userCME.ID)
            {
                return BadRequest();
            }

            _context.Entry(userCME).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserCMEExists(id))
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

        // POST: api/UserCMEs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserCME>> PostUserCME(UserCME userCME)
        {
            _context.UserCME.Add(userCME);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserCME", new { id = userCME.ID }, userCME);
        }

        // DELETE: api/UserCMEs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserCME(int id)
        {
            var userCME = await _context.UserCME.FindAsync(id);
            if (userCME == null)
            {
                return NotFound();
            }

            _context.UserCME.Remove(userCME);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserCMEExists(int id)
        {
            return _context.UserCME.Any(e => e.ID == id);
        }
    }
}
