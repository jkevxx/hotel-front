import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';


export const admin = [
  {
    id: 1,
    nameRoute: "Dashboard",
    route: "/dashboard",
    icon: <DashboardIcon />
  },
  {
    id: 2,
    nameRoute: "Reservations",
    route: "/reservations",
    icon: <EventIcon />
  },
  {
    id: 3,
    nameRoute: "Rooms",
    route: "/room",
    icon: <MeetingRoomIcon />
  },
]