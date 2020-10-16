using System.Web.Http;
using System.Web.Mvc;
using Microsoft.Practices.Unity;
using Unity.Mvc5;
using Utilitarian.IoC.Classes;

namespace MobileNet_Web
{
    public static class Bootstrapper
    {
        public static IUnityContainer Initialize()
        {
            var container = BuilUnityContainer();
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
            GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
            return container;
        }

        public static IUnityContainer BuilUnityContainer()
        {
            var container = new UnityContainer();
            RegisterTypes(container);
            return container;
        }

        public static void RegisterTypes(IUnityContainer container)
        {
            ModuleLoader.LoadContainer(container, ".\\bin","Application.*.dll");
            ModuleLoader.LoadContainer(container, ".\\bin", "Domain.*.dll");
            ModuleLoader.LoadContainer(container, ".\\bin", "Data.Persistence.*.dll");
        }
    }
}