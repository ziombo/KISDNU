using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using System.Collections.Generic;
using System.IO;
using Microsoft.Extensions.PlatformAbstractions;


namespace KeepItSolved.Models
{
	public class SolvedContext : IdentityDbContext<IdentityUser>
    {
		public DbSet<Flashcard> Flashcards { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			//WHEN WORKING ON UBUNTU
			optionsBuilder.UseSqlite("data source=/home/demo/test.db;");

			//WHEN WORKING ON WINDOWS
			/*
			var connString = Startup.Configuration["Data:SolvedContextConnection"];

			optionsBuilder.UseSqlServer(connString);

			base.OnConfiguring(optionsBuilder);
			*/
		}
	}
}
