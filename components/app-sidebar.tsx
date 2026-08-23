import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Dashboard",
    url: "#",
  },
  {
    title: "Water Chemistry",
    url: "#",
  },
  {
    title: "Maintenance",
    url: "#",
  },
    {
    title: "Trends",
    url: "#",
  },
  {
    title: "Live Stock",
    url: "#",
  },
    {
    title: "Settings",
    url: "#",
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
         <SidebarHeader>
          <SidebarGroupLabel>Reef Dashboard</SidebarGroupLabel>
         </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton render={<a href={item.url} />}>
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}