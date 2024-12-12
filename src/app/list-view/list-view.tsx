import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrInput, IgrInputModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule, IgrTree, IgrTreeItem, IgrTreeModule } from 'igniteui-react';
import { useRef } from 'react';
import { useGetAllCoursesList } from '../hooks/learning-app-hooks';
import styles from './list-view.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrDialogModule.register();
IgrInputModule.register();
IgrListModule.register();
IgrRippleModule.register();
IgrSelectModule.register();
IgrTreeModule.register();

export default function ListView() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const newTaskDialog = useRef<IgrDialog>(null);
  const { learningAppAllCourses: get } = useGetAllCoursesList();

  return (
    <>
      <div className={classes("list-view-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <div className={classes("row-layout group_2")}>
              <span className={classes("material-icons icon")}>
                <span key={uuid()}>assignment</span>
              </span>
              <h6 className={classes("h6")}>
                <span>To do</span>
              </h6>
            </div>
            <IgrAvatar initials="3" shape="circle" className={classes("avatar")}></IgrAvatar>
          </div>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_1 avatar_1_1")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Create brand guidelines</div>
              <div slot="subtitle" key={uuid()}>Deadline: Nov 19, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar_1 avatar_1_2")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>App Preview</div>
              <div slot="subtitle" key={uuid()}>Deadline: Nov 24, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar9.png" shape="circle" className={classes("avatar_1 avatar_1_3")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Cloud Integration</div>
              <div slot="subtitle" key={uuid()}>Deadline: Nov 28, 2021</div>
            </IgrListItem>
          </IgrList>
        </div>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_3")}>
            <div className={classes("row-layout group_2")}>
              <span className={classes("material-icons icon")}>
                <span key={uuid()}>developer_board</span>
              </span>
              <h6 className={classes("h6")}>
                <span>In Development</span>
              </h6>
            </div>
            <IgrAvatar initials="5" shape="circle" className={classes("avatar_2")}></IgrAvatar>
          </div>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar_1 avatar_1_4")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Connect to DataSources</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 28, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar3.png" shape="circle" className={classes("avatar_1 avatar_1_5")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Build App</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 28, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar5.png" shape="circle" className={classes("avatar_1 avatar_1_6")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Copy-Paste Update</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 24, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_1 avatar_1_7")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Grid Data-Binding </div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 26, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar10.png" shape="circle" className={classes("avatar_1 avatar_1_8")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Main Dashboard Design</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 20, 2021</div>
            </IgrListItem>
          </IgrList>
        </div>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_4")}>
            <div className={classes("row-layout group_2")}>
              <span className={classes("material-icons icon")}>
                <span key={uuid()}>assignment_late</span>
              </span>
              <h6 className={classes("h6")}>
                <span>Validation</span>
              </h6>
            </div>
            <IgrAvatar initials="4" shape="circle" className={classes("avatar_3")}></IgrAvatar>
          </div>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar7.png" shape="circle" className={classes("avatar_1 avatar_1_9")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Update Samples</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 15, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar_1 avatar_1_10")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Floating Toolbar</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 14, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar9.png" shape="circle" className={classes("avatar_1 avatar_1_11")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Input Update</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 17, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar3.png" shape="circle" className={classes("avatar_1 avatar_1_12")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>App Library</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 16, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
          </IgrList>
        </div>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_5")}>
            <div className={classes("row-layout group_2")}>
              <span className={classes("material-icons icon")}>
                <span key={uuid()}>check_circle</span>
              </span>
              <h6 className={classes("h6")}>
                <span>Done</span>
              </h6>
            </div>
            <IgrAvatar initials="5" shape="circle" className={classes("avatar_4")}></IgrAvatar>
          </div>
          <IgrList className={classes("list")}>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar8.png" shape="circle" className={classes("avatar_1 avatar_1_13")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Onboarding Experience</div>
              <div slot="subtitle" key={uuid()}>October 13, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_1 avatar_1_14")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Design Specs</div>
              <div slot="subtitle" key={uuid()}>October 9, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar10.png" shape="circle" className={classes("avatar_1 avatar_1_15")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>File Parser</div>
              <div slot="subtitle" key={uuid()}>October 10, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_1 avatar_1_16")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>Final Mockups</div>
              <div slot="subtitle" key={uuid()}>Deadline: Oct 14, 2021</div>
            </IgrListItem>
            <IgrListItem key={uuid()}>
              <div slot="start" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar5.png" shape="circle" className={classes("avatar_1 avatar_1_17")} key={uuid()}></IgrAvatar>
              </div>
              <div slot="title" key={uuid()}>GitHub Integration</div>
              <div slot="subtitle" key={uuid()}>September 30, 2021</div>
              <span slot="end" className={classes("material-icons icon_1")} key={uuid()}>
                <span key={uuid()}>attach_file</span>
              </span>
            </IgrListItem>
          </IgrList>
        </div>
        <IgrTree selection="none" className={classes("tree")}>
          <IgrTreeItem label="Design" expanded="true" key={uuid()}>
            <IgrTreeItem label="Figma" expanded="true" key={uuid()}></IgrTreeItem>
            <IgrTreeItem label="Adobe XD" expanded="true" key={uuid()}></IgrTreeItem>
            <IgrTreeItem label="Sketch" expanded="true" key={uuid()}></IgrTreeItem>
          </IgrTreeItem>
          <IgrTreeItem label="Development" expanded="true" key={uuid()}>
            <IgrTreeItem label="Angular" expanded="true" key={uuid()}></IgrTreeItem>
            <IgrTreeItem label="Blazor" expanded="true" key={uuid()}></IgrTreeItem>
            <IgrTreeItem label="Web components" expanded="true" key={uuid()}></IgrTreeItem>
          </IgrTreeItem>
        </IgrTree>
        <IgrDialog closeOnOutsideClick="true" ref={newTaskDialog}>
          <h5 slot="title" key={uuid()}>
            <span>Add New Task</span>
          </h5>
          <div className={classes("column-layout group_6")} key={uuid()}>
            <IgrInput label="Task Title" outlined="false" className={classes("input")}></IgrInput>
            <div className={classes("row-layout group_7")}>
              <IgrSelect outlined="false" label="Project" placeholder="Pick a project" className={classes("select")}>
                <span slot="prefix" key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>assignment</span>
                  </span>
                </span>
                <IgrSelectItem value="Option" key="281d83c8-ad69-41ce-aa8f-2598b058e1ab">
                  <span key={uuid()}>Fintech Project</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="da7168d9-ef20-4817-9949-77919e8e0cdf">
                  <span key={uuid()}>DataViz Project</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="b9f2025f-89c3-4f48-bf61-889bb99e5bdc">
                  <span key={uuid()}>Onboarding Project</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="de9e8433-1f48-457c-befa-bca907f30098">
                  <span key={uuid()}>AppBuilder Project</span>
                </IgrSelectItem>
              </IgrSelect>
              <IgrSelect outlined="false" label="Status" placeholder="Set Status" className={classes("select_1")}>
                <span slot="prefix" key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>schedule</span>
                  </span>
                </span>
                <IgrSelectItem value="Option" key="dcb1ff1d-c933-4f77-b1be-3a6be711d3de">
                  <span key={uuid()}>To Do</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="d7fcf7e4-18b6-4e4a-9cb2-fa40f3d13df1">
                  <span key={uuid()}>In Development</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="bc313312-374a-43c7-a3ca-365c48914a23">
                  <span key={uuid()}>Validation</span>
                </IgrSelectItem>
                <IgrSelectItem value="Option" key="133820be-4585-4a03-a4c1-69aa1388fc92">
                  <span key={uuid()}>Done</span>
                </IgrSelectItem>
              </IgrSelect>
            </div>
          </div>
          <div slot="footer" key={uuid()}>
            <IgrButton type="button" clicked={() => newTaskDialog?.current?.toggle()} className={classes("button")} key={uuid()}>
              <span key={uuid()}>Create Task</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
        <IgrButton variant="fab" clicked={() => newTaskDialog?.current?.toggle()} className={classes("button_1 button_1_1")}>
          <span className={classes("material-icons icon_3")} key={uuid()}>
            <span key={uuid()}>add</span>
          </span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
      </div>
    </>
  );
}
