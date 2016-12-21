<?php


// No direct access
defined('_JEXEC') or die('Restricted access');

/**
 * Controller one
 *
 * Accepts an array of configuration values to the constructor. If no config
 * passed, it will automatically determine the component and controller names.
 * Internally, sets the $database, $user, $view, and component $config.
 *
 * Executable tasks are determined by method name. All public methods that end in
 * "Task" (e.g., displayTask, editTask) are callable by the end user.
 *
 * View name defaults to controller name with layout defaulting to task name. So,
 * a $controller of "One" and a $task of "two" will map to:
 *
 *    /{component name}
 *        /views
 *            /one
 *                /tmpl
 *                    /two.php
 */
class WebslamControllerOne extends \Hubzero\Component\SiteController
{
    /**
     * Default task
     *
     * @return     void
     */
    public function displayTask()
    {
        /*
        // Require login to access page
        if (User::isGuest())
        {
            App::abort(403, Lang::txt('You must be logged in to run webSLAM'));
        }
        */
        // Set the page title
        $this->_buildTitle();

        // Set the pathway
        $this->_buildPathway();

        // Pass error messages to the view
        if ($this->getError())
        {
            foreach ($this->getErrors() as $error)
            {
                $this->view->setError($error);
            }
        }

        // Output the HTML

        // NOTE:
        // A \Hubzero\Component\View object is auto-created when calling
        // execute() on the controller. By default, the view directory is
        // set to the controller name and layout is set to task name.
        //
        // controller=foo&task=bar   loads a view from:
        //
        //   view/
        //     foo/
        //       tmpl/
        //         bar.php
        //
        // A new layout or name can be chosen by calling setLayout('newlayout')
        // or setName('newname') respectively.
        $this->view->display();
    }

    /**
     * Method to set the document path
     *
     * @param      array $tags Tags currently viewing
     * @return     void
     */
    protected function _buildPathway($tags=null)
    {
        $pathway = JFactory::getApplication()->getPathway();

        if (count($pathway->getPathWay()) <= 0)
        {
            $pathway->addItem(
                JText::_(strtoupper($this->_option)),
                'index.php?option=' . $this->_option
            );
        }
        if ($this->_task && $this->_task != 'display')
        {
            $pathway->addItem(
                JText::_(strtoupper($this->_option) . '_' . strtoupper($this->_task)),
                'index.php?option=' . $this->_option . '&task=' . $this->_task
            );
        }
    }

    /**
     * Method to build and set the document title
     *
     * @param      array $tags Tags currently viewing
     * @return     void
     */
    protected function _buildTitle($tags=null)
    {
        $this->view->title = JText::_(strtoupper($this->_option));
        if ($this->_task && $this->_task != 'display')
        {
            $this->view->title .= ': ' . JText::_(strtoupper($this->_option) . '_' . strtoupper($this->_task));
        }

        JFactory::getDocument()->setTitle($this->view->title);
    }
}
