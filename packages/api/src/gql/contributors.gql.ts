import {gql} from "apollo-server";

export const contributorsGql = gql`
  type Creator {
    login: String
    id: Int
    node_id: String
    avatar_url: String
    gravatar_id: String
    url: String
    html_url: String
    followers_url: String
    following_url: String
    gists_url: String
    starred_url: String
    subscriptions_url: String
    organizations_url: String
    repos_url: String
    events_url: String
    received_events_url: String
    type: String
    site_admin: Boolean
  }

  type User {
    login: String
    id: Int
    node_id: String
    avatar_url: String
    gravatar_id: String
    url: String
    html_url: String
    followers_url: String
    following_url: String
    gists_url: String
    starred_url: String
    subscriptions_url: String
    organizations_url: String
    repos_url: String
    events_url: String
    received_events_url: String
    type: String
    site_admin: Boolean
  }

  type Label {
    id: Int
    node_id: String
    url: String
    name: String
    description: String
    color: String
    default: Boolean
  }

  type Milestone {
    url: String
    html_url: String
    labels_url: String
    id: Int
    node_id: String
    number: Int
    state: String
    title: String
    description: String
    creator: Creator
    open_issues: Int
    closed_issues: Int
    created_at: String
    updated_at: String
    closed_at: String
    due_on: String
  }

  type Assignee {
    login: String
    id: Int
    node_id: String
    avatar_url: String
    gravatar_id: String
    url: String
    html_url: String
    followers_url: String
    following_url: String
    gists_url: String
    starred_url: String
    subscriptions_url: String
    organizations_url: String
    repos_url: String
    events_url: String
    received_events_url: String
    type: String
    site_admin: Boolean
  }

  type Assignee2 {
    login: String
    id: Int
    node_id: String
    avatar_url: String
    gravatar_id: String
    url: String
    html_url: String
    followers_url: String
    following_url: String
    gists_url: String
    starred_url: String
    subscriptions_url: String
    organizations_url: String
    repos_url: String
    events_url: String
    received_events_url: String
    type: String
    site_admin: Boolean
  }

  type RequestedReviewer {
    login: String
    id: Int
    node_id: String
    avatar_url: String
    gravatar_id: String
    url: String
    html_url: String
    followers_url: String
    following_url: String
    gists_url: String
    starred_url: String
    subscriptions_url: String
    organizations_url: String
    repos_url: String
    events_url: String
    received_events_url: String
    type: String
    site_admin: Boolean
  }

  type RequestedTeam {
    id: Int
    node_id: String
    url: String
    html_url: String
    name: String
    slug: String
    description: String
    privacy: String
    permission: String
    members_url: String
    repositories_url: String
  }

  type User2 {
    login: String
    id: Int
    node_id: String
    avatar_url: String
    gravatar_id: String
    url: String
    html_url: String
    followers_url: String
    following_url: String
    gists_url: String
    starred_url: String
    subscriptions_url: String
    organizations_url: String
    repos_url: String
    events_url: String
    received_events_url: String
    type: String
    site_admin: Boolean
  }

  type Owner {
    login: String
    id: Int
    node_id: String
    avatar_url: String
    gravatar_id: String
    url: String
    html_url: String
    followers_url: String
    following_url: String
    gists_url: String
    starred_url: String
    subscriptions_url: String
    organizations_url: String
    repos_url: String
    events_url: String
    received_events_url: String
    type: String
    site_admin: Boolean
  }

  type Permissions {
    admin: Boolean
    push: Boolean
    pull: Boolean
  }

  type License {
    key: String
    name: String
    url: String
    spdx_id: String
    node_id: String
    html_url: String
  }

  type Head {
    label: String
    ref: String
    sha: String
    user: User2
    repo: Repo
  }

  type User3 {
    login: String
    id: Int
    node_id: String
    avatar_url: String
    gravatar_id: String
    url: String
    html_url: String
    followers_url: String
    following_url: String
    gists_url: String
    starred_url: String
    subscriptions_url: String
    organizations_url: String
    repos_url: String
    events_url: String
    received_events_url: String
    type: String
    site_admin: Boolean
  }

  type Owner2 {
  login: String
  id: Int
  node_id: String
  avatar_url: String
  gravatar_id: String
  url: String
  html_url: String
  followers_url: String
  following_url: String
  gists_url: String
  starred_url: String
  subscriptions_url: String
  organizations_url: String
  repos_url: String
  events_url: String
  received_events_url: String
  type: String
  site_admin: Boolean
  }

  type Permissions2 {
  admin: Boolean
  push: Boolean
  pull: Boolean
  }

  type License2 {
  key: String
  name: String
  url: String
  spdx_id: String
  node_id: String
  html_url: String
  }

  type Repo2 {
  id: Int
  node_id: String
  name: String
  full_name: String
  owner: Owner2
  private: Boolean
  html_url: String
  description: String
  fork: Boolean
  url: String
  archive_url: String
  assignees_url: String
  blobs_url: String
  branches_url: String
  collaborators_url: String
  comments_url: String
  commits_url: String
  compare_url: String
  contents_url: String
  contributors_url: String
  deployments_url: String
  downloads_url: String
  events_url: String
  forks_url: String
  git_commits_url: String
  git_refs_url: String
  git_tags_url: String
  git_url: String
  issue_comment_url: String
  issue_events_url: String
  issues_url: String
  keys_url: String
  labels_url: String
  languages_url: String
  merges_url: String
  milestones_url: String
  notifications_url: String
  pulls_url: String
  releases_url: String
  ssh_url: String
  stargazers_url: String
  statuses_url: String
  subscribers_url: String
  subscription_url: String
  tags_url: String
  teams_url: String
  trees_url: String
  clone_url: String
  mirror_url: String
  hooks_url: String
  svn_url: String
  homepage: String
  forks_count: Int
  stargazers_count: Int
  watchers_count: Int
  size: Int
  default_branch: String
  open_issues_count: Int
  is_template: Boolean
  topics: [String]
  has_issues: Boolean
  has_projects: Boolean
  has_wiki: Boolean
  has_pages: Boolean
  has_downloads: Boolean
  archived: Boolean
  disabled: Boolean
  visibility: String
  pushed_at: String
  created_at: String
  updated_at: String
  permissions: Permissions2
  allow_rebase_merge: Boolean
  temp_clone_token: String
  allow_squash_merge: Boolean
  allow_auto_merge: Boolean
  delete_branch_on_merge: Boolean
  allow_merge_commit: Boolean
  subscribers_count: Int
  network_count: Int
  license: License2
  forks: Int
  open_issues: Int
  watchers: Int
  }

  type Base {
  label: String
  ref: String
  sha: String
  user: User3
  repo: Repo2
  }

  type Self {
  href: String
  }

  type Html {
  href: String
  }

  type Issue {
  href: String
  }

  type Comments {
  href: String
  }

  type ReviewComments {
  href: String
  }

  type ReviewComment {
  href: String
  }

  type Commits {
  href: String
  }

  type Statuses {
  href: String
  }

  type Links {
  self: Self
  html: Html
  issue: Issue
  comments: Comments
  review_comments: ReviewComments
  review_comment: ReviewComment
  commits: Commits
  statuses: Statuses
  }

  type Repo {
    id: Int
    node_id: String
    name: String
    full_name: String
    owner: Owner
    private: Boolean
    html_url: String
    description: String
    fork: Boolean
    url: String
    archive_url: String
    assignees_url: String
    blobs_url: String
    branches_url: String
    collaborators_url: String
    comments_url: String
    commits_url: String
    compare_url: String
    contents_url: String
    contributors_url: String
    deployments_url: String
    downloads_url: String
    events_url: String
    forks_url: String
    git_commits_url: String
    git_refs_url: String
    git_tags_url: String
    git_url: String
    issue_comment_url: String
    issue_events_url: String
    issues_url: String
    keys_url: String
    labels_url: String
    languages_url: String
    merges_url: String
    milestones_url: String
    notifications_url: String
    pulls_url: String
    releases_url: String
    ssh_url: String
    stargazers_url: String
    statuses_url: String
    subscribers_url: String
    subscription_url: String
    tags_url: String
    teams_url: String
    trees_url: String
    clone_url: String
    mirror_url: String
    hooks_url: String
    svn_url: String
    homepage: String
    forks_count: Int
    stargazers_count: Int
    watchers_count: Int
    size: Int
    default_branch: String
    open_issues_count: Int
    is_template: Boolean
    topics: [String]
    has_issues: Boolean
    has_projects: Boolean
    has_wiki: Boolean
    has_pages: Boolean
    has_downloads: Boolean
    archived: Boolean
    disabled: Boolean
    visibility: String
    pushed_at: String
    created_at: String
    updated_at: String
    permissions: Permissions
    allow_rebase_merge: Boolean
    temp_clone_token: String
    allow_squash_merge: Boolean
    allow_auto_merge: Boolean
    delete_branch_on_merge: Boolean
    allow_merge_commit: Boolean
    subscribers_count: Int
    network_count: Int
    license: License
    forks: Int
    open_issues: Int
    watchers: Int
  }

  type Pulls {
    url: String
    id: Int
    node_id: String
    html_url: String
    diff_url: String
    patch_url: String
    issue_url: String
    commits_url: String
    review_comments_url: String
    review_comment_url: String
    comments_url: String
    statuses_url: String
    number: Int
    state: String
    locked: Boolean
    title: String
    user: User
    body: String
    labels: [Label]
    milestone: Milestone
    active_lock_reason: String
    created_at: String
    updated_at: String
    closed_at: String
    merged_at: String
    merge_commit_sha: String
    assignee: Assignee
    assignees: [Assignee2]
    requested_reviewers: [RequestedReviewer]
    requested_teams: [RequestedTeam]
    head: Head
    base: Base
    _links: Links
    author_association: String
    draft: Boolean
  }
  type Contributors {
    activities_count: Int
    activities_score: Int
    last_sync: String
    avatar_url: String
    bio: String
    birthday: String
    company: String
    title: String
    created_at: String
    deleted_at: String
    first_activity_occurred_at: String
    last_activity_occurred_at: String
    location: String
    name: String
    pronouns: String
    reach: Int
    shipping_address: String
    slug: String
    source: String
    teammate: Boolean
    tshirt: String
    updated_at: String
    merged_at: String
    url: String
    orbit_url: String
    created: Boolean
    id: String
    orbit_level: Int
    love: String
    twitter: String
    github: String
    email: String
    devto: String
    linkedin: String
    discord: String
    github_followers: Int
    twitter_followers: Int
    totalLast3MonthsPulls: Int
    totalPulls: Int
    topics: [String]
    languages: [String]
    pulls: [Pulls]
    last3MonthsPulls: [Pulls]
  }
`
