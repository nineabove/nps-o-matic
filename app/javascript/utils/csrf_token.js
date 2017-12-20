export default function csrfToken() {
  const metaNode = document.querySelector('meta[name=\'csrf-token\']');

  if (!metaNode) {
    return '';
  }

  return metaNode.getAttribute('content');
}
