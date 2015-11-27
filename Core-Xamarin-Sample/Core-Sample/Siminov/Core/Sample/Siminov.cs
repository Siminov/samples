using System;

using System.Reflection;
using System.Collections.Generic;
using System.IO;

using Siminov.Core.Library.Sample;

namespace Siminov.Core.Sample
{
	public class Siminov 
	{
		public void Initialize()
		{

			Module module = this.GetType ().GetTypeInfo ().Assembly.ManifestModule;
			IEnumerable<Module> modules = this.GetType ().GetTypeInfo ().Assembly.Modules;
			string[] names = this.GetType ().GetTypeInfo ().Assembly.GetManifestResourceNames();

			IInitializer initializer = Core.Siminov.Initializer ();
			initializer.AddParameter (typeof(Siminov).GetTypeInfo().Assembly);
			initializer.AddParameter (typeof(Core.Library.Sample.Model.Credential).GetTypeInfo().Assembly);

			initializer.Initialize();
		}
	}
}

