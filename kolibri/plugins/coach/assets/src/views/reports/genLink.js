
const Constants = require('../../constants');


/*
 * Generates a REPORTS location object relative to the
 * current page state, with only newParams changed.
 */
function genLink(pageState, newParams) {
  const currentParams = {
    class_id: pageState.classId,
    channel_id: pageState.channelId,
    content_scope: pageState.content_scope,
    content_scope_id: pageState.content_scope_id,
    user_scope: pageState.user_scope,
    user_scope_id: pageState.user_scope_id,
    all_or_recent: pageState.all_or_recent,
    view_by_content_or_learners: pageState.view_by_content_or_learners,
    sort_column: pageState.sort_column,
    sort_order: pageState.sort_order,
  };
  const vlink = {
    name: Constants.PageNames.REPORTS,
    params: {},
  };
  Object.assign(vlink.params, currentParams, newParams);
  return vlink;
}

module.exports = genLink;
