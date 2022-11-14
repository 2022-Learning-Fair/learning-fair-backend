function Grid({project}) {
  return (
      <div className="Grid">
        <img src={project.project_thumbnail_url} alt="썸네일" loading="lazy"/>
        {/* <p className="GridLike">{project.like_cnt}</p> */}
        <p className="GridTeam">[{project.team_number}] {project.team_name}</p>
        <p className="GridProjectName">{project.project_name}</p>
        <p className="GridTeamMember">{project.team_member}</p>
        <p className="GridHashtag">
          <span>#{project.hashtag_main}</span> 
          `{project.hashtag_custom_a}?{<span>#{project.hashtag_custom_a}</span> }:""` 
          `{project.hashtag_custom_b}?{<span>#{project.hashtag_custom_b}</span> }:""` 
          `{project.hashtag_custom_c}?{<span>#{project.hashtag_custom_c}</span> }:""` 
        </p>
      </div>
    );
}
export default Grid;
