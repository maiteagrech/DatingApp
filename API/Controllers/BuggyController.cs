using System;
using dating_app_api.Data;
using dating_app_api.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace dating_app_api.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context; 
        }
        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text";
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var notExistingValue = _context.Users.Find(-1);

            if (notExistingValue == null) return NotFound();

            return Ok(notExistingValue);
        }

        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            var notExistingValue = _context.Users.Find(-1);

            var errorValueToReturn = notExistingValue.ToString();

            return errorValueToReturn;
        }

        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("This was not a good request");
        }

    }
}