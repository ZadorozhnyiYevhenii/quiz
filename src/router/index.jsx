import { LanguagePage } from "../pages/LanguagePage/LanguagePage";
import { GenderPage } from "../pages/GenderPage/GenderPage";
import { AgePage } from "../pages/AgePage/AgePage";
import { HatePage } from "../pages/HatePage/HatePage";
import { TopicsPage } from "../pages/TopicsPage/TopicsPage";

export const router = [
  {
    path: '/quiz',
    element: <LanguagePage />,
    children: [
      {
        path: '/quiz/1',
        element: <GenderPage />
      },
      {
        path: '/quiz/2',
        element: <AgePage />
      },
      {
        path: '/quiz/3',
        element: <HatePage />
      },
      {
        path: '/quiz/4',
        element: <TopicsPage />
      }
    ]
  }
];