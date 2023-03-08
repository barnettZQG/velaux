import { Route, Switch, Redirect } from 'dva/router';
import React from 'react';

import Addons from '../../pages/Addons/index';
import ApplicationConfig from '../../pages/ApplicationConfig';
import ApplicationEnvRoute from '../../pages/ApplicationEnvRoute';
import ApplicationInstanceList from '../../pages/ApplicationInstanceList';
import Application from '../../pages/ApplicationList';
import ApplicationLog from '../../pages/ApplicationLog';
import ApplicationRevisionList from '../../pages/ApplicationRevisionList';
import ApplicationStatus from '../../pages/ApplicationStatus';
import ApplicationWorkflowList from '../../pages/ApplicationWorkflowList';
import ApplicationWorkflowStatus from '../../pages/ApplicationWorkflowStatus/index';
import ApplicationWorkflowStudio from '../../pages/ApplicationWorkflowStudio';
import Clusters from '../../pages/Cluster/index';
import Configs from '../../pages/Configs';
import Definitions from '../../pages/Definitions';
import EnvPage from '../../pages/EnvPage';
import NotFound from '../../pages/NotFound';
import PipelineListPage from '../../pages/PipelineListPage';
import PipelineRunPage from '../../pages/PipelineRunPage';
import PipelineStudio from '../../pages/PipelineStudio';
import ProjectApplications from '../../pages/ProjectApplications';
import ProjectMembers from '../../pages/ProjectMembers';
import ProjectPipelines from '../../pages/ProjectPipelines';
import ProjectRoles from '../../pages/ProjectRoles';
import ProjectSummary from '../../pages/ProjectSummary';
import Projects from '../../pages/Projects';
import Roles from '../../pages/Roles';
import TargetList from '../../pages/TargetList';
import UiSchema from '../../pages/UiSchema';
import Users from '../../pages/Users';
import ApplicationLayout from '../Application';
import ConfigsLayout from '../Configs';
import DefinitionDetails from '../DefinitionDetails';
import DefinitionsLayout from '../Definitions';
import ProjectLayout from '../Project';

export default function Content() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/applications" />;
        }}
      />
      <Route exact path="/applications" component={Application} />
      <Route
        exact
        path="/applications/:appName"
        render={(props: any) => {
          return <Redirect to={`/applications/${props.match.params.appName}/config`} />;
        }}
      />
      <Route
        exact
        path="/applications/:appName/config"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationConfig {...props} />
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/revisions"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationRevisionList {...props} />
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/envbinding"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationEnvRoute {...props} />;
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/workflows"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationWorkflowList {...props} />
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/envbinding/:envName"
        render={(props: any) => {
          return (
            <Redirect
              to={`/applications/${props.match.params.appName}/envbinding/${props.match.params.envName}/status`}
            />
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/envbinding/:envName/instances"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationInstanceList {...props} />
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/envbinding/:envName/status"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationStatus {...props} />
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/envbinding/:envName/workflow"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationWorkflowStatus {...props} />
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/envbinding/:envName/workflow/records/:record"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationWorkflowStatus {...props} />
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/envbinding/:envName/workflow/studio"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationWorkflowStudio {...props} />
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/applications/:appName/envbinding/:envName/logs"
        render={(props: any) => {
          return (
            <ApplicationLayout {...props}>
              <ApplicationLog {...props} />
            </ApplicationLayout>
          );
        }}
      />
      <Route
        exact
        path="/envs"
        render={(props: any) => {
          return <EnvPage {...props} />;
        }}
      />
      <Route exact path="/pipelines" component={PipelineListPage} />
      <Route
        exact
        path="/projects/:projectName/pipelines/:pipelineName/runs/:runName"
        component={PipelineRunPage}
      />
      <Route
        exact
        path="/projects/:projectName/pipelines/:pipelineName/studio"
        component={PipelineStudio}
      />
      <Route path="/targets" component={TargetList} />
      <Route path="/clusters" component={Clusters} />
      <Route path="/addons/:addonName" component={Addons} />
      <Route path="/addons" component={Addons} />
      <Route path="/users" component={Users} />
      <Route exact path="/projects" component={Projects} />
      <Route
        exact
        path="/projects/:projectName"
        render={(props: any) => {
          return <Redirect to={`/projects/${props.match.params.projectName}/summary`} />;
        }}
      />
      <Route
        exact
        path="/projects/:projectName/summary"
        render={(props: any) => {
          const mergeProps = { ...props, ...{ activeId: 'summary' } };
          return (
            <ProjectLayout {...mergeProps}>
              <ProjectSummary {...mergeProps} />
            </ProjectLayout>
          );
        }}
      />
      <Route
        exact
        path="/projects/:projectName/applications"
        render={(props: any) => {
          const mergeProps = { ...props, ...{ activeId: 'applications' } };
          return (
            <ProjectLayout {...mergeProps}>
              <ProjectApplications {...mergeProps} />
            </ProjectLayout>
          );
        }}
      />
      <Route
        exact
        path="/projects/:projectName/pipelines"
        render={(props: any) => {
          const mergeProps = { ...props, ...{ activeId: 'pipelines' } };
          return (
            <ProjectLayout {...mergeProps}>
              <ProjectPipelines {...mergeProps} />
            </ProjectLayout>
          );
        }}
      />
      <Route
        exact
        path="/projects/:projectName/roles"
        render={(props: any) => {
          const mergeProps = { ...props, ...{ activeId: 'roles' } };
          return (
            <ProjectLayout {...mergeProps}>
              <ProjectRoles {...mergeProps} />
            </ProjectLayout>
          );
        }}
      />
      <Route
        exact
        path="/projects/:projectName/members"
        render={(props: any) => {
          const mergeProps = { ...props, ...{ activeId: 'members' } };
          return (
            <ProjectLayout {...mergeProps}>
              <ProjectMembers {...mergeProps} />
            </ProjectLayout>
          );
        }}
      />
      <Route exact path="/roles" component={Roles} />

      <Route
        exact
        path="/configs"
        render={(props: any) => {
          return <ConfigsLayout {...props} />;
        }}
      />

      <Route
        exact
        path="/configs/:templateName"
        render={(props: any) => {
          return <Redirect to={`/configs/${props.match.params.templateName}/config`} />;
        }}
      />

      <Route
        exact
        path="/configs/:templateName/config"
        render={(props: any) => {
          return (
            <ConfigsLayout {...props}>
              <Configs {...props} />
            </ConfigsLayout>
          );
        }}
      />

      <Route
        exact
        path="/definitions"
        render={() => {
          return <Redirect to={`/definitions/component/config`} />;
        }}
      />

      <Route
        exact
        path="/definitions/:definitionType"
        render={(props: any) => {
          return <Redirect to={`/definitions/${props.match.params.definitionType}/config`} />;
        }}
      />

      <Route
        exact
        path="/definitions/:definitionType/config"
        render={(props: any) => {
          return (
            <DefinitionsLayout {...props}>
              <Definitions {...props} />
            </DefinitionsLayout>
          );
        }}
      />

      <Route
        exact
        path="/definitions/:definitionType/:definitionName/ui-schema"
        render={(props: any) => {
          const mergeProps = { ...props, ...{ activeId: 'uiSchema' } };
          return (
            <DefinitionDetails {...mergeProps}>
              <UiSchema {...props} />
            </DefinitionDetails>
          );
        }}
      />

      <Route path="/notFound" component={NotFound} />
      <Redirect to="/notFound" />
    </Switch>
  );
}