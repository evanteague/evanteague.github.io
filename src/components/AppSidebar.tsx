import { useQuery } from '@tanstack/react-query';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useServerFn } from '@tanstack/react-start';
import {
  getWorks as getServerWorks,
  getProjects as getServerProjects,
} from '@/data/requests';
import { WORKS, PROJECTS } from '@/data/data';

export function AppSidebar() {
  // Uncomment to use server functions
  // const getWorks = useServerFn(getServerWorks);
  // const getProjects = useServerFn(getServerProjects);

  // const { data: works } = useQuery({
  //   queryKey: ['works'],
  //   queryFn: () => getWorks(),
  // });
  // const { data: projects } = useQuery({
  //   queryKey: ['projects'],
  //   queryFn: () => getProjects(),
  // });

  const works = WORKS;
  const projects = PROJECTS;
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Work Experience</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {works?.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={`#${item.title}`}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects?.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={`#${item.title}`}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>
            <a href="#contact">Contact</a>
          </SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
