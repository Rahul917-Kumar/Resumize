import BasicLayout from "../../components/modules/builder/editor/modules/basic/BasicLayout";
import EducationLayout from "../../components/modules/builder/editor/modules/education/EducationLayout";
import SkillsLayout from "../../components/modules/builder/editor/modules/skills/SkillsLayout";
import ExperienceLayout from "../../components/modules/builder/editor/modules/experience/ExperienceLayout";
import ActivitiesLayout from "../../components/modules/builder/editor/modules/activities/ActivitiesLayout";
import VolunteeringLayout from "../../components/modules/builder/editor/modules/volunteering/VolunteeringLayout";
import AwardsLayout from "../../components/modules/builder/editor/modules/awards/AwardsLayout";

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element };
} = {
  "basic-details": { title: "Basic details", component: BasicLayout },
  "skills-and-expertise": {
    title: "Skills and expertise",
    component: SkillsLayout,
  },
  education: { title: "Education", component: EducationLayout },
  experience: { title: "Experience", component: ExperienceLayout },
  activities: { title: "Activities", component: ActivitiesLayout },
  volunteering: { title: "Volunteering", component: VolunteeringLayout },
  awards: { title: "Awards", component: AwardsLayout },
};
