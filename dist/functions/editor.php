<?php

/**
 * Remove wysiwyg editor for pages post types
 */

add_action( 'init', 'remove_wysiwyg_editor' );

function remove_wysiwyg_editor () {
  remove_post_type_support( 'post', 'editor');
  remove_post_type_support( 'page', 'editor');
}

add_action('init', function() {
  remove_post_type_support( 'app', 'editor');
}, 99);

/**
 * Hide the main editor on specific pages
 */
// define('EDITOR_HIDE_PAGE_TITLES', json_encode(array('Our Practice')));
// define('EDITOR_HIDE_PAGE_TEMPLATES', json_encode(array('template-cars.php')));

/**
 * Hide the main editor on defined pages
 *
 * You can choose between page titles or page templates. Just set them
 * accordingly like this:
 *
 * define('EDITOR_HIDE_PAGE_TITLES', json_encode(array('Home', 'Some post archive', 'Some Listing')));
 * define('EDITOR_HIDE_PAGE_TEMPLATES', json_encode(array('template-of-something.php', 'archive-customposttype.php')));
 *
 *
 * @global string $pagenow
 * @return void
 */
