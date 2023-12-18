import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialProjects = {
  inProgress: [
    { id: "project1", content: "프로젝트 1" },
    { id: "project2", content: "프로젝트 2" },
  ],
  completed: [{ id: "project3", content: "프로젝트 3" }],
};

function ProjectBoard() {
  const [projects, setProjects] = useState(initialProjects);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // 드롭 위치가 유효하지 않은 경우
    if (!destination) {
      return;
    }

    // 같은 리스트 내에서의 재배치
    if (source.droppableId === destination.droppableId) {
      const items = Array.from(projects[source.droppableId]);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      setProjects({
        ...projects,
        [source.droppableId]: items,
      });
    } else {
      // 다른 리스트로 이동
      const sourceItems = Array.from(projects[source.droppableId]);
      const destinationItems = Array.from(projects[destination.droppableId]);
      const [movedItem] = sourceItems.splice(source.index, 1);

      destinationItems.splice(destination.index, 0, movedItem);

      setProjects({
        ...projects,
        [source.droppableId]: sourceItems,
        [destination.droppableId]: destinationItems,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {Object.entries(projects).map(([columnId, projectList]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                }}
                {...provided.droppableProps}
              >
                <h3>
                  {columnId === "inProgress"
                    ? "진행 중인 프로젝트"
                    : "완료된 프로젝트"}
                </h3>
                {projectList.map((project, index) => (
                  <Draggable
                    key={project.id}
                    draggableId={project.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: "none",
                          padding: 16,
                          margin: "0 0 8px 0",
                          backgroundColor: snapshot.isDragging
                            ? "lightgreen"
                            : "grey",
                          color: "white",
                          ...provided.draggableProps.style,
                        }}
                      >
                        {project.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default ProjectBoard;
