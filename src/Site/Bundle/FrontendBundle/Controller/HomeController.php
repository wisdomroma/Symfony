<?php

namespace Site\Bundle\FrontendBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends Controller
{
    public function indexAction(Request $request)
    {
        return $this->render('SiteFrontendBundle:Home:index.html.twig', array(
                // ...
            ));
    }
    
    public function onenewAction($id, Request $request)
    {
        return $this->render('SiteFrontendBundle:Home:onenew.html.twig', array(
                // ...
            ));
    }
    
    public function categoryAction($id, Request $request)
    {
        return $this->render('SiteFrontendBundle:Home:category.html.twig', array(
                // ...
            ));
    }
    
    public function monthAction($month, Request $request)
    {
        return $this->render('SiteFrontendBundle:Home:month.html.twig', array(
                // ...
            ));
    }
    
    public function tomorrowAction(Request $request)
    {
        return $this->render('SiteFrontendBundle:Home:tomorrow.html.twig', array(
                // ...
            ));
    }
    
    public function postAction(Request $request)
    {
        return $this->render('SiteFrontendBundle:Home:post.html.twig', array(
                // ...
            ));
    }

}
